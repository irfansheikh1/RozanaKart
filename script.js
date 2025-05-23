const allItems = [
    "bread",
    "milk",
    "eggs",
    "cake",
    "buns",
    "pastry",
    "biscuits",
    "chips",
    "juice",
    "cold drink"
  ];

  document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultBox = document.getElementById("searchResult");

    if (query !== "") {
      if (allItems.includes(query)) {
        resultBox.textContent = `✅ "${query}" is available.`;
        resultBox.classList.remove("text-red-500");
        resultBox.classList.add("text-green-600");
      } else {
        resultBox.textContent = `❌ "${query}" is not available.`;
        resultBox.classList.remove("text-green-600");
        resultBox.classList.add("text-red-500");
      }
    } else {
      resultBox.textContent = "Please enter an item to search.";
      resultBox.classList.remove("text-green-600");
      resultBox.classList.add("text-red-500");
    }
     get obbses gwt  obbsesde 
  });
   const kart = {} items{
    items = "  eggs , ice cream , white ball,  chappati . floor

  document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("searchBtn").click();
    }
  });

  // Select the "Order Now" button
  const orderNowButton = document.querySelector('a[href="#categories"]');

  // Check if the button is found
  if (orderNowButton) {
    orderNowButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior
      alert('✅ Check our category');
      console.log('✅ Check our category');
      // Smooth scroll to the categories section
      document.querySelector('#categories').scrollIntoView({ behavior: 'smooth' });
    });
  } else {
    console.error("Button not found");
  } 

  const kart 
{items = ["eggs", "ice cream", "white ball", "chappati", "floor", {

  obj =
}]