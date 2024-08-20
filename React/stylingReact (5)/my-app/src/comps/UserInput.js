export default function Input({ label, oid, ...props }) {
  let labelClass='block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300'
  let inputClass='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300'
  if (oid){
  labelClass='block mb-2 text-xs font-bold tracking-wide uppercase text-red-500'
  inputClass='w-full px-3 py-2 leading-tight text-red-500 border rounded shadow bg-red-100 border-red-300'
  }
  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}