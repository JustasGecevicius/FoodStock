interface onChangeType {
  onChange: (value: number) => void;
  macros: number;
}

export default function MacroInput({ onChange, macros }: onChangeType) {
  return (
    <label
      htmlFor=''
      className='flex flex-col justify-center text-center text-teal-900 align-middle grow basis-0'>
      Macro
      <input
        onChange={(e) => onChange(+e.target.value)}
        className='w-full px-3 py-2 text-white bg-teal-700 rounded-md'
        type='number'
        placeholder='0'
        value={macros}
      />
    </label>
  );
}
