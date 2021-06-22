let minTextLength = 3;
        let i = 1;

        let input = document.getElementById("input");
        let list = document.getElementById("list");

        function textFilter(x) {
            if (x) {

                if (x.length >= minTextLength) {

                    return x;

                } else {
                    alert("Min Text Length is 3");
                    return false;
                }

            } else {
                alert("Input Text Empty");
                return false;
            }
        }

        function showList(text) {
            list.innerHTML += `
            <li class="list-item" id="list${i}">
                <div class="list-style">
                    <div class="list-text">
                        <span id="listText${i}">${text}</span>
                    </div>
                    <div class="listBtn">
                        <button class="editBtn" onclick='editList(${i})'><i class="fas fa-pen"></i></button>
                        <button class="delBtn" onclick='deleteList(${i})'><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </li>
            
        `;
            i++;
        }

        function deleteList(listId) {

            let current = document.getElementById(`list${listId}`);
            let currentText = document.getElementById(`listText${listId}`).innerHTML;
            let deleteConfirm = confirm(`Are U Sure To Delete List '${currentText}'`);

            if (deleteConfirm) {
                list.removeChild(current);
            } else {
                console.log("Delete Cancel");
            }
        }

        function editList(listId) {
            let current = document.getElementById(`listText${listId}`);
            let newText = prompt("Say Something", current.innerHTML);

            if (textFilter(newText)) {
                current.innerHTML = newText;
            }

        }



        function addList() {
            //get
            let inputText = textFilter(input.value);

            if (inputText) {
                //set
                showList(inputText);
                input.value = "";
            }
        }

        input.addEventListener("keyup", function (e) {
            if (e.keyCode == 13) {
                addList();
            }
        })