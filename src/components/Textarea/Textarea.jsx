export default function Textarea({ placeholder,label, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
        <label className="text-paragraph font-medium">{label}</label>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-40 px-4 py-2 text-paragraph rounded-lg bg-transparent border border-divider focus:outline-none focus:border-primary"
        />
    </div>
  );
}