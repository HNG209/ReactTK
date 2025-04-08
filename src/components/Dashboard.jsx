import Card from "./Card"
import cart from '../assets/cart.png'
import money from '../assets/money.png'
import user from '../assets/user.png'
import file from '../assets/file.png'
import importIcon from '../assets/import.png'
import exportIcon from '../assets/export.png'
import dashboard from '../assets/dashboard.png'
import Table from "./Table"
import Header from "./Header"
import { useContext, useState } from "react"
import { useAddRow } from "../DataProvider"

export default function Dashboard() {
    const addRow = useAddRow();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "",
    });

    const closeModal = () => setIsOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Data:", formData);
        addOrder();
        closeModal();
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    async function addOrder() {
        try {
            const response = await fetch('https://67da34cd35c87309f52b67a2.mockapi.io/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            //add form data to table
            addRow(data);
        } catch (error) {
            console.error('Error adding order:', error);
        }
    }

    return (
        <>
            <Header name={'Dashboard'}></Header>
            <div className="content">
                <h1 className='text-lg font-bold mb-6 mt-2 flex items-center gap-1.5'>
                    <img src={dashboard} alt="Dashboard Icon" className="w-5 h-5" />
                    Overview
                </h1>
                <div className='flex justify-around'>
                    <Card title={'Turnover'} total={'92,405'} percentage={'5.39'} icon={cart} color={'pink'}></Card>
                    <Card title={'Turnover'} total={'92,405'} percentage={'5.39'} icon={money}></Card>
                    <Card title={'Turnover'} total={'92,405'} percentage={'5.39'} icon={user}></Card>
                </div>
                <div className='flex mt-5 justify-around'>
                    {/* text */}
                    <h1 className='text-lg font-bold mb-6 mt-5 flex items-center gap-1.5'>
                        <img src={file} alt="Dashboard Icon" className="w-5 h-5" />
                        Detailed report
                    </h1>
                    {/* button group */}
                    <div className='ml-auto flex items-center gap-2'>
                        <button  onClick={toggleModal} className='flex items-center border-2 rounded-lg p-2 hover:bg-pink-300 hover:text-white'>
                            <img className='w-5 h-5 mr-2' src={importIcon} alt="" />
                            Import
                        </button>
                        <button className='flex items-center border-2 rounded-lg p-2 hover:bg-pink-300 hover:text-white'>
                            <img className='w-5 h-5 mr-2' src={exportIcon} alt="" />
                            Export
                        </button>
                    </div>
                </div>
                {/* datatable part */}
                <div className="border-2 border-gray-300 rounded-lg p-4">
                    <Table></Table>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* Backdrop */}
                        <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300" onClick={closeModal}></div>

                        {/* Modal box */}
                        <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative z-10 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
                            <h2 className="text-lg font-semibold mb-4">Add New Order</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Customer Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Order Value</label>
                                    <input
                                        type="number"
                                        name="orderValue"
                                        value={formData.orderValue}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Order Date</label>
                                    <input
                                        type="date"
                                        name="orderDate"
                                        value={formData.orderDate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        required
                                    >
                                        <option value="">Select status</option>
                                        <option value="In-progress">In-progress</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
                <style jsx>{`
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
            `}</style>
            </div>
        </>
    )
}