import Category from "../components/Category";

const CategoryPage = props => (
  <div>
    <Category query={props.query.query} />
  </div>
);

export default CategoryPage;
