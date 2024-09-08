// MainContent.jsx
import React, { useState } from "react";

const MainContent = ({ isSidebarExpanded }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const dummyData = [
    { id: 1, title: "Card 1", description: "This is Card 1" },
    { id: 2, title: "Card 2", description: "This is Card 2" },
    { id: 3, title: "Card 3", description: "This is Card 3" },
    { id: 4, title: "Card 4", description: "This is Card 4" },
    { id: 5, title: "Card 5", description: "This is Card 5" },
    { id: 6, title: "Card 6", description: "This is Card 6" },
    { id: 7, title: "Card 7", description: "This is Card 7" },
    { id: 8, title: "Card 8", description: "This is Card 8" },
    { id: 9, title: "Card 9", description: "This is Card 9" },
    // Add more dummy data with icons and content
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const filteredData = dummyData.filter((card) =>
    card.title.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") return a.title.localeCompare(b.title);
    else return b.title.localeCompare(a.title);
  });

  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarExpanded ? "ml-64" : "ml-16"
      } p-4`}
    >
      {/* Filter and Sort Options */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Filter by title"
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition ease-in-out"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Title ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Cards */}
      <div className="h-96 overflow-y-auto space-y-4">
        {sortedData.map((card) => (
          <div
            key={card.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition ease-in-out cursor-pointer flex items-center"
            onClick={() => openModal(card)}
          >
            {card.icon}
            <div className="ml-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
