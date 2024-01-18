function Spinner () {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner-inner animate-spin w-30 h-30 border-t-4 border-orange-400 rounded-full">
                Ładowanie...
            </div>
        </div>
    );
}

export default Spinner;