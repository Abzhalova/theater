import React from "react";
import "./CreateList.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PosterForm from "../forms/posterForm/PosterForm";
import RepertoireForm from "../forms/repertoireForm/RepertoireForm";

type Repertoire = {
  date: string;
  time: string;
  name: string;
  genre: string;
  ageLimit: string;
  price: string;
};

const CreateList = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [showPosterForm, setShowPosterForm] = React.useState(false);
  const [showRepertoireForm, setShowRepertoireForm] = React.useState(false);

  const [repertoires, setRepertoires] = React.useState<Repertoire[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePosterClick = () => {
    setShowPosterForm(true);
    setShowRepertoireForm(false);
    handleClose();
  };
  const handleRepertoireClick = () => {
    setShowRepertoireForm(true);
    setShowPosterForm(false);
    handleClose();
  };

  const handleAddRepertoire = (data: Repertoire) => {
    setRepertoires((prev) => [...prev, data]);
  };

  const addRepertoire = (data: Repertoire) => {
    setRepertoires((prev) => [...prev, data]);
  };

  return (
    <section id="create">
      <div className="container">
        <div className="create">
          <div className="category">
            <h3>Создайте продукт: </h3>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ fontFamily: "Scada, serif" }}
            >
              Категории
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem
                onClick={handlePosterClick}
                sx={{ fontFamily: "Scada, serif" }}
              >
                АФИША
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ fontFamily: "Scada, serif" }}
              >
                СПЕКТАКЛЬ
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ fontFamily: "Scada, serif" }}
              >
                ИНФОРМАЦИЯ О ТЕАТРЕ
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ fontFamily: "Scada, serif" }}
              >
                КОМАНДА
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ fontFamily: "Scada, serif" }}
              >
                ГАЛЕРЕЯ
              </MenuItem>
              <MenuItem
                onClick={handleRepertoireClick}
                sx={{ fontFamily: "Scada, serif" }}
              >
                РЕПЕРТУАР
              </MenuItem>
            </Menu>
          </div>

          {showPosterForm && <PosterForm />}
          {showRepertoireForm && <RepertoireForm onAdd={addRepertoire} />}
        </div>
      </div>
    </section>
  );
};

export default CreateList;
