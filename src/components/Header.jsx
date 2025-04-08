import bell from '../assets/bell.png'
import question from '../assets/question.png'
import user from '../assets/user.png'

export default function Header({name}) {
    return (
        <div class="header">
            <h1 className='text-2xl font-bold text-pink-400'>{name}</h1>
            <div className='w-1/2 flex items-center justify-end'>
                <input className='bg-gray-100 w-1/2 h-8 rounded-lg p-3' placeholder="Search..." type="text" name="" id="" />
                <img className='w-6 h-6 ml-3' src={bell} alt="" />
                <img className='w-6 h-6 ml-3' src={question} alt="" />
                <img className='w-10 h-10 ml-3' src={user} alt="" />
            </div>
        </div>
    )
}