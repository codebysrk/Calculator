function inputValue(value) {
            document.getElementById('res').value += value;
        }
        function calculate() {
            let result = eval(document.getElementById('res').value);
            document.getElementById('res').value = result;
        }
        function cleaR() {
            document.getElementById('res').value = '';
        }
