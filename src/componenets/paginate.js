import _ from "lodash";
export const paginate = (courses, currentPage, perPage) => {
  const courseIndex = (1 - currentPage) * perPage;
  return _(courses).slice(courseIndex).take(perPage).value();
};
