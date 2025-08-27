export default function CardOperation({ message, title, emoji }) {
    return (
        <div className="relative p-4 text-start space-y-2 border border-divider rounded-md bg-divider/25 backdrop-blur-xl backdrop-saturate-180 overflow-hidden transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-2xl hover:bg-divider/40">
            <div className="glass"></div>
            
            <div className="relative z-10 space-y-2">
                <div className="p-2 bg-gradient-to-t from-primary to-secondary rounded-md w-fit">
                    {emoji}
                </div>
                <h3 className="text-2xl font-semibold text-title">{title}</h3>
                <p className="text-paragraph font-satoshi">{message}</p>
            </div>
        </div>
    )
}