

export type Repertoire = {
  date: string;
  time: string;
  name: string;
  genre: string;
  ageLimit: string;
  price: string;
};

export type RepertoireFormProps = {
  onAdd: (data: Repertoire) => void;
};