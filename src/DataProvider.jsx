
export default function DataProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://67da34cd35c87309f52b67a2.mockapi.io/customer')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    
    return (
        <>
        </>
    )
}