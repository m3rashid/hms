export const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    border: 0,
    outline: 0,
    borderBottom: "1px solid #ccc",
    fontSize: "0.9rem",
    marginTop: "10px",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "0.9rem",
  }),
  singleValue: (base, state) => ({
    ...base,
    fontSize: "0.9rem",
  }),
};

export const loginUser = async (formData) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

export const options = [
  { value: "ADMIN", label: "ADMIN" },
  { value: "DOCTOR", label: "DOCTOR" },
  { value: "RECEPTIONIST", label: "RECEPTIONIST" },
  { value: "PHARMACIST", label: "PHARMACIST" },
];
