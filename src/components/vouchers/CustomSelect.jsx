import Select from "react-select";

const CustomSelect = ({ options, placeholder }) => {
  return (
    <div className="w-full">
      <Select
        options={options}
        placeholder={placeholder}
        className="w-full"
        classNamePrefix="select"
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base, state) => ({
            ...base,
            height: "42px",
            minHeight: "42px",
            borderRadius: "8px",
            borderColor: "#E5E7EB",
            boxShadow: "none",
            paddingLeft: "4px",
            backgroundColor: "#fff", // force white bg
            "&:hover": {
              borderColor: "#2563EB",
            },
            ...(state.isFocused && {
              borderColor: "#2563EB",
              boxShadow: "none",
            }),
          }),
          placeholder: (base) => ({
            ...base,
            color: "#9CA3AF",
            fontSize: "14px",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#111827", // black text for selected value
            fontSize: "14px",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: "6px",
            color: "#111827", // force arrow black in Opera
          }),
          // ✅ Fix for Opera: dropdown menu & items
          menu: (base) => ({
            ...base,
            backgroundColor: "#fff", // force white background
            color: "#111827", // text stays black
            zIndex: 9999,
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#F3F4F6" : "#fff",
            color: "#111827", // force black text
            fontSize: "14px",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

export default CustomSelect;
