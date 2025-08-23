export default function Input({ placeholder, label, type= "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
        <label className="text-paragraph font-medium">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 text-paragraph rounded-lg bg-transparent border border-divider focus:outline-none focus:border-primary"
        />
    </div>
  );
}