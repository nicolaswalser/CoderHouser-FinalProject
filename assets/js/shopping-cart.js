let totalPrice = 0;

const listItemsContainer = document.querySelector(".list-items");

listItemsContainer.addEventListener("click", addItemToMyList);

function addItemToMyList(event) {
  const item = event.target.closest(".item");
  if (item) {
    const itemPrice = parseFloat(
      item.querySelector(".item-price").textContent.slice(1)
    );
    const itemTitle = item.querySelector(".item-title").textContent;

    const listItem = document.createElement("li");
    listItem.textContent = itemTitle;

    const myList = document.getElementById("my-list");
    myList.appendChild(listItem);

    totalPrice += itemPrice;
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "Total: $" + totalPrice.toFixed(2);
  }
}
