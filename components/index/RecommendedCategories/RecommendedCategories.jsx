import { useEffect, useState } from "react"
import CategoriesRow from './CategoriesRow'

const RecommendedCategories = () => {

    const [recommendedCategories, setRecommendedCategories] = useState([])

    useEffect(() => {
        import('../../../data/recommended.json').then((data) => setRecommendedCategories(data.default.recommendedCategories))
    }, [])

    return (
        <div className='mx-4 mb-12 p-4'>
            <h1 className='text-white font-semibold text-lg'><span className='text-purple'>Categories</span> we think you’ll like</h1>
            <CategoriesRow categories={recommendedCategories} />
        </div>
    )
}

export default RecommendedCategories
