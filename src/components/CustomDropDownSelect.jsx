import Select from "react-select";

const CustomDropDownSelect = ({ data, placeholder, bgColor = "#F5F5F5" }) => {
  return (
    <Select
      options={data}
      placeholder={placeholder}
      className="basic-single"
      classNamePrefix="select"
      isSearchable={false}
      components={{ IndicatorSeparator: () => null }}
      styles={{
        control: (base) => ({
          ...base,
          height: "34px",
          minHeight: "34px",
          borderRadius: "8px",
          borderColor: "#EEEEEE",
          backgroundColor: bgColor,
          boxShadow: "none",
          "&:hover": { borderColor: "#2563EB" },
        }),
        placeholder: (base) => ({ ...base, color: "#9CA3AF", fontSize: "12px" }),
        singleValue: (base) => ({ ...base, color: "#1F2937", fontSize: "12px" }),
        dropdownIndicator: (base) => ({ ...base, padding: "4px" }),

        /* dropdown (menu) text colour */
        option: (base, state) => ({
          ...base,
          color: state.isSelected ? "#fff" : "#1F2937",
          fontSize: "12px",
          backgroundColor: state.isSelected ? "#2563EB" : "transparent",
          "&:hover": { backgroundColor: "#dbeafe" },
        }),
      }}
    />
  );
};

export default CustomDropDownSelect;