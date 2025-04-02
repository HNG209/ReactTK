
export default function Card({title, total, percentage}) {
    return (
        <div className="flex flex-col w-1/3 bg-white mr-2 rounded-lg">
            <h1 className="text-lg font-bold m-3">{title}</h1>
            <h1 className="text-4xl m-3">{`$${total}`}</h1>
            <p className="m-3">{`${percentage}% period of change`}</p>
        </div>
    )
}