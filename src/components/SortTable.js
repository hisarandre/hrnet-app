import React from "react";
import illu from "../asset/illu-1.png";

import SelectMenu from "./SelectMenu";

const SortTable = ({ pageSize, setPageSize, GlobalFilter, globalFilter, setGlobalFilter }) => {
  const nbrOfEntries = [10, 25, 50];

  return (
    <header className="sort-table">
      <h1> Current Employees</h1>

      <section className="sort-table__filters">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

        <SelectMenu
          options={nbrOfEntries}
          label="Show:"
          optionText="entries"
          name={pageSize}
          setValue={(e) => setPageSize(e.target.value)}
        />
      </section>

      <img className="illu" aria-hidden="true" src={illu} alt="illustration" />
    </header>
  );
};

export default SortTable;
