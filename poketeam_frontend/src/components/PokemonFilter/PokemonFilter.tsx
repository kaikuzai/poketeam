import { useMemo } from "react";
import useTypes from "../../hooks/useTypes";
import Select from "react-select";

interface Props {
  handleTypeChange: (
    selectedType: { value: string; label: string } | null
  ) => void;
  selectedType: {
    value: string;
    label: string;
  } | null;
}

const PokemonFilter = ({ selectedType, handleTypeChange }: Props) => {
  // Memoize customStyles to avoid unnecessary re-renders
  const customStyles = useMemo(() => ({
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "white" : "black", // Change color based on selection state
      background: state.isSelected ? "#007BFF" : "white", // Change background color based on selection state
      padding: 8,
    }),
    control: (provided: any) => ({
      ...provided,
      width: "900px",
    }),
  }), []);

  const { data } = useTypes();

  // Memoize options to avoid unnecessary re-renders
  const options = useMemo(
    () =>
      data.map((type) => ({
        value: type.type_name,
        label: type.type_name,
      })),
    [data] // Recalculate only when data changes
  );

  return (
    <Select
      styles={customStyles}
      className="pokemon-filter"
      options={options}
      value={selectedType}
      placeholder="Filter by type!"
      onChange={(selectedOption) => {
        handleTypeChange(selectedOption);
      }}
    />
  );
};

export default PokemonFilter;
