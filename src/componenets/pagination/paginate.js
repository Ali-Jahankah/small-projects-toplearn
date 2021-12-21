import _ from "lodash";
export const paginate = (courses, currentPage, perPage) => {
  const courseIndex = (currentPage - 1) * perPage;
  console.log(courses);
  return _(courses).slice(courseIndex).take(perPage).value();
};
