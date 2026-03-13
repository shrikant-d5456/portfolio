import useApiData from "../../hooks/useApiData";
import { endpoints } from "../../services/api";

const Services = () => {
    const { data: services } = useApiData(endpoints.services);

    return (
        <section id="services" className="relative py-10  text-black">
            {/* Top Service Grid */}
            <div className="mt-12 grid grid-cols-2  gap-8 w-11/12 md:w-10/12 mx-auto">
                {services.slice(0, 2).map((service) => (
                    <div
                        key={service.title}
                        className="bg-white/30 border border-white z-10 lg:-mb-10 -mb-4 backdrop-blur-md  lg:p-6 p-2 flex flex-col items-center text-center transition-all"
                    >
                        <p className=" lg:block hidden text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                        <h3 className="lg:text-xl text-sm font-bold lg:mb-3 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">{service.title}</h3>
                    </div>
                ))}
            </div>

            {/* Middle Image Banner Section */}
            <div className="relative  w-full overflow-hidden">
                <img
                    src="https://i.etsystatic.com/isbl/088972/46216298/isbl_3360x840.46216298_7i1s55q1.jpg?version=0"
                    alt="Services Banner"
                    className="w-full h-[300px] object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
                        My Services
                    </h2>
                    <p className="text-gray-200 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
                        Delivering modern, scalable, and elegant digital solutions to help
                        businesses and individuals grow online.
                    </p>
                    <div className="mt-4 w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
                </div>
            </div>

            {/* Bottom Service Grid */}
            <div className="  grid grid-cols-2   gap-8 w-11/12 md:w-10/12 mx-auto -mt-10">
                {services.slice(3, 6).map((service) => (
                    <div
                        key={service.title}
                        className="bg-white/30 border border-white z-10 lg:-mb-10 -mb-4 backdrop-blur-md  lg:p-6 p-2 flex flex-col items-center text-center transition-all"
                    >
                        <h3 className="lg:text-xl text-sm font-bold lg:mb-3 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">{service.title}</h3>
                        <p className=" lg:block hidden text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
