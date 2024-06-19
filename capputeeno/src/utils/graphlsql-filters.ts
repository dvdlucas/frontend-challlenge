import { FilterType } from "@/types/filter-type";
import { PriorityTypes } from "@/types/priority-types";

export function getCategory(type: FilterType) {
    if (type == FilterType.MUG) return "mugs";
    if (type == FilterType.SHIRT) return "t-shirts";
    return "";
}

export function getFieldByPriority(priority: PriorityTypes) {
    if (priority === PriorityTypes.NEWS) return { field: "created_at", order: "DESC" };
    if (priority === PriorityTypes.BIGGEST_PRICE) return { field: "price_in_cents", order: "DESC" };
    if (priority === PriorityTypes.MINOR_PRICE) return { field: "price_in_cents", order: "ASC" };
    return { field: "sales", order: "DESC" };
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
    if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "DESC") {
          id
          name
          price_in_cents
          image_url
        }
      }
    `;
    const sortSettings = getFieldByPriority(priority);
    const categoryFilter = getCategory(type);
    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `;
}
