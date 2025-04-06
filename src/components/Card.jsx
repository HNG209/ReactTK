export default function Card({ title, total, percentage, color, icon }) {
    // Default color to 'blue' if not provided
    color = color || 'blue';

    // Map the color prop to Tailwind classes
    const bgColorClass = {
        blue: 'bg-blue-100',
        green: 'bg-green-100',
        red: 'bg-red-100',
        yellow: 'bg-yellow-100',
        pink : 'bg-pink-100',
    }[color] || 'bg-blue-100'; // Default to blue if color is invalid


    const bgColorHover = {
        blue: 'hover:bg-blue-300',
        green: 'hover:bg-green-300',
        red: 'hover:bg-red-300',
        yellow: 'hover:bg-yellow-300',
        pink : 'hover:bg-pink-300',
    }[color] || 'hover:bg-blue-300'; // Default to blue if color is invalid

    return (
        <div className={`flex justify-between w-1/3 ${bgColorClass} mr-2 rounded-lg`}>
            <div>
                <h1 className="text-lg font-bold m-3">{title}</h1>
                <h1 className="text-4xl m-3 font-bold">{`$${total}`}</h1>
                <p className="m-3">{`${percentage}% period of change`}</p>
            </div>
            <div className="mt-5 mr-5">
                <button className={`border-2 rounded-lg p-2 ${bgColorHover}`}>
                    <img className="w-6 h-6" src={icon} alt="" />
                </button>
            </div>
        </div>
    );
}