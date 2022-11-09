import React from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Service = () => {
    const { user } = useContext(AuthContext);
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServicesData(data);
                setLoading(false);
            });
    }, [user]);
    return (
        <div>

        </div>
    );
};

export default Service;