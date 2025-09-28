import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPoster } from "../../../../redux/slices/posterSlices";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const categories = ["Спектакли", "Концерты", "Для детей", "Семинары"];
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const months = [
  "Янв",
  "Фев",
  "Март",
  "Апр",
  "Май",
  "Июнь",
  "Июль",
  "Авг",
  "Сен",
  "Окт",
  "Нояб",
  "Дек",
];
const hours = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const minutes = ["00", "15", "30", "45"];

const PosterForm = () => {
  const dispatch = useDispatch();

  type FormType = {
    title: string;
    description: string;
    duration: string;
    price: string;
    locationName: string;
    ageLimit: string;
    image: string;
    category: string;
    dates: { day: string; month: string; hour: string; minute: string }[];
  };

  const [form, setForm] = useState<FormType>({
    title: "",
    description: "",
    duration: "",
    price: "",
    locationName: "",
    ageLimit: "",
    image: "",
    category: "",
    dates: [],
  });

  const [dateInput, setDateInput] = useState({
    day: "",
    month: "",
    hour: "",
    minute: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setForm({ ...form, [field]: value });
  };
  const handleDateChange = (field: string, value: string) =>
    setDateInput({ ...dateInput, [field]: value });

  const addDate = () => {
    const { day, month, hour, minute } = dateInput;
    if (!day || !month || !hour || !minute)
      return alert("Заполните дату полностью!");
    setForm((prev) => ({ ...prev, dates: [...prev.dates, { ...dateInput }] }));
    setDateInput({ day: "", month: "", hour: "", minute: "" });
  };

  const removeDate = (index: number) => {
    setForm((prev) => ({
      ...prev,
      dates: prev.dates.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.category || form.dates.length === 0) {
      return alert("Заполните все обязательные поля!");
    }

    const newPoster = {
      ...form,
      id: Date.now().toString(),
      price: Number(form.price),
      ageLimit: Number(form.ageLimit),
    };
    dispatch(addPoster(newPoster));
    setForm({
      title: "",
      description: "",
      duration: "",
      price: "",
      locationName: "",
      ageLimit: "",
      image: "",
      category: "",
      dates: [],
    });
    setDateInput({ day: "", month: "", hour: "", minute: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "0 auto" }}>
      <h4>Создание афиши</h4>

      <TextField
        label="Название афиши"
        variant="outlined"
        fullWidth
        value={form.title}
        onChange={(e) => handleChange("title", e.target.value)}
        sx={{ mb: 2 }}
        required
      />

      <TextField
        label="Описание"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={form.description}
        onChange={(e) => handleChange("description", e.target.value)}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }} required>
        <InputLabel>Категория</InputLabel>
        <Select
          value={form.category}
          label="Категория"
          onChange={(e) => handleChange("category", e.target.value)}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Изображение (URL)"
        variant="outlined"
        fullWidth
        value={form.image}
        onChange={(e) => handleChange("image", e.target.value)}
        sx={{ mb: 2 }}
      />

      <div
        style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}
      >
        <FormControl sx={{ flex: 1 }}>
          <InputLabel>День</InputLabel>
          <Select
            value={dateInput.day}
            onChange={(e) => handleDateChange("day", e.target.value)}
          >
            {days.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ flex: 1 }}>
          <InputLabel>Месяц</InputLabel>
          <Select
            value={dateInput.month}
            onChange={(e) => handleDateChange("month", e.target.value)}
          >
            {months.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ flex: 1 }}>
          <InputLabel>Час</InputLabel>
          <Select
            value={dateInput.hour}
            onChange={(e) => handleDateChange("hour", e.target.value)}
          >
            {hours.map((h) => (
              <MenuItem key={h} value={h}>
                {h}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ flex: 1 }}>
          <InputLabel>Минута</InputLabel>
          <Select
            value={dateInput.minute}
            onChange={(e) => handleDateChange("minute", e.target.value)}
          >
            {minutes.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="outlined" onClick={addDate}>
          Добавить
        </Button>
      </div>

      {form.dates.length > 0 && (
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {form.dates.map((d, i) => (
            <li
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              {d.day} {d.month}, {d.hour}:{d.minute}
              <IconButton
                onClick={() => removeDate(i)}
                color="error"
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </li>
          ))}
        </ul>
      )}

      <TextField
        label="Длительность (часы)"
        variant="outlined"
        fullWidth
        value={form.duration}
        onChange={(e) => handleChange("duration", e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Цена билета (сом)"
        variant="outlined"
        fullWidth
        value={form.price}
        onChange={(e) => handleChange("price", e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Место проведения"
        variant="outlined"
        fullWidth
        value={form.locationName}
        onChange={(e) => handleChange("locationName", e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Возрастное ограничение"
        variant="outlined"
        fullWidth
        value={form.ageLimit}
        onChange={(e) =>
          /^\d*$/.test(e.target.value) &&
          handleChange("ageLimit", e.target.value)
        }
        sx={{ mb: 2 }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Создать
      </Button>
    </form>
  );
};

export default PosterForm;
