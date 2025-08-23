export default function ItemStep({ selected = false, completed = false }) {
    return (
        <div className={`p-1 rounded-full w-8 md:w-20 ${(selected || completed)? "bg-primary": "bg-paragraph"}`} >

        </div>
    )
}