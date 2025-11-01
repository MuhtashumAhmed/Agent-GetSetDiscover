import Select from "react-select";

const countryOptions = [
  { value: "pakistan", label: "🇵🇰 Pakistan" },
  { value: "india", label: "🇮🇳 India" },
  { value: "usa", label: "🇺🇸 USA" },
  { value: "uk", label: "🇬🇧 UK" },
  { value: "uae", label: "🇦🇪 UAE" },
];

const CountrySelect = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <Select
        options={countryOptions}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
            color: "#111827",
            fontSize: "14px",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: "6px",
          }),
          // ✅ Force black text in Opera
          menu: (base) => ({
            ...base,
            backgroundColor: "#fff",
            color: "#111827", // text color inside menu
            zIndex: 9999,
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#F3F4F6" : "#fff",
            color: "#111827",
            fontSize: "14px",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

export default CountrySelect;
