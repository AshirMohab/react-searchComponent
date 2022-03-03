import React, { useEffect, useState } from "react";

export enum LOADINGSTATE {
  PENDING = "pending",
  SUCCESS = "success",
  FAILURE = "failure",
}

export function SearchComponent() {
  const [getInputState, setInputState] = useState("");
  const [mtgCard, setMtgCard] = useState(null);

  const handleOnEnterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
    console.log(`using scryfall api.`);
    const fetchMTG = async () => {
      return await fetch(
        `https://api.scryfall.com/cards/autocomplete?q=${e.target.value}`
      )
        .then((res) => res.json())
        .then((res) => setMtgCard(res));
    };
    fetchMTG();
  };
  const handleDebounceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputState(e.target.value);
  };
  const handleFormSubmitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  // const MtgComponent = (name: string) => {
  //   const [mtgCard, setMtgCard] = useState(null);
  //   useEffect(() => {
  //     console.log(`using scryfall api.`);
  //     const fetchMTG = async () => {
  //       return await fetch(`https://api.scryfall.com/cards/random${name}`).then(
  //         (res) => res.json().then((res) => setMtgCard(res))
  //       );
  //     };
  //     fetchMTG();
  //     console.log(fetchMTG());
  //   }, []);
  //   return (
  //     <div className="bg-blue-400 flex flex-col">
  //       <h1>{mtgCard?.name}</h1>
  //       <h2>{mtgCard?.rarity}</h2>
  //     </div>
  //   );
  // };

  return (
    <div className="flex flex-row font-semibold text-sm items-center px-6 gap-5 sm:gap-24">
      <div id="debounce">
        {" "}
        <label className="p-2">Debounce</label>
        <input
          id="debounce-input"
          type="text"
          value={getInputState}
          onChange={(e) => handleDebounceChange(e)}
        />
      </div>
      <div id="on-enter">
        {" "}
        <label className="p-2">Press enter</label>
        <input
          id="enter-input"
          type="text"
          value={getInputState}
          onChange={(e) => handleOnEnterChange(e)}
        />
      </div>
      <div id="submit-form">
        {" "}
        <label className="p-2">Submit form</label>
        <input
          id="form-submit"
          value={getInputState}
          type="text"
          onChange={(e) => handleFormSubmitChange(e)}
        />
      </div>
      <div className="bg-blue-400 flex flex-col">
        <h1>{mtgCard?.data}</h1>
        {/* <h2>{mtgCard?.rarity}</h2>{" "} */}
      </div>
    </div>
  );
}
