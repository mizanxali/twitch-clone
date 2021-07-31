import CategoryThumbnail from "./CategoryThumbnail"


const CategoriesRow = (props) => {
    return (
        <div className='mx-auto my-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
            {props.categories.map(category => <CategoryThumbnail category={category} />)}
        </div>
    )
}

export default CategoriesRow