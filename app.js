const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const input_num = document.querySelector("input").value;
    const input_numberSystem = document.querySelector(".input-numberSystem").value;
    const output_numberSystem = document.querySelector(".output-numberSystem").value;
    const output_num = document.querySelector(".output-container");
    decimalized_num = input_numberSystem_identifier(input_numberSystem, input_num);
    converted_num = output_numberSystem_identifier(output_numberSystem, decimalized_num);
    output_num.textContent = `${converted_num}`;
    output_num.classList.add("after-output");
});

function input_numberSystem_identifier(input_numberSystem, input_num) {
    if (input_numberSystem === "bin") {
        decimal_num = decimalSystem_converter(input_num, 2);
    } else if (input_numberSystem === "qui") {
        decimal_num = decimalSystem_converter(input_num, 5);
    } else if (input_numberSystem === "oct") {
        decimal_num = decimalSystem_converter(input_num, 8);
    } else if (input_numberSystem === "dec") {
        decimal_num = input_num;
    } else {
        decimal_num = hexadecimal_to_decimal(input_num);
    }
    return decimal_num;
}

function output_numberSystem_identifier(output_numberSystem, decimal_num) {
    if (output_numberSystem === "bin") {
        converted_num = requiredSystem_converter(decimal_num, 2);
    } else if (output_numberSystem === "qui") {
        converted_num = requiredSystem_converter(decimal_num, 5);
    } else if (output_numberSystem === "oct") {
        converted_num = requiredSystem_converter(decimal_num, 8);
    } else if (output_numberSystem === "dec") {
        converted_num = decimal_num;
    } else {
        converted_num = decimal_to_hexadecimal(decimal_num);
    }
    return converted_num;
}

function decimalSystem_converter(input_num, base) {
    let decimal_num = 0;
    let power = 0;
    while (input_num !== 0) {
        remainder = input_num % 10;
        decimal_num += remainder * (base ** power);
        power += 1;
        input_num = Math.floor(input_num / 10);
    }
    return decimal_num;
}

function hexadecimal_to_decimal(input_num) {
    let decimal_num = 0;
    let power = 0;
    hexadecimal_num = String(input_num).toUpperCase();
    length_of_number = hexadecimal_num.length - 1;
    for (let i = length_of_number; i >= 0; i--) {
        hexadecimal_value = hexadecimal_num.substr(i, 1);
        if (hexadecimal_value === "A") {
            decimal_value = 10;
        } else if (hexadecimal_value === "B") {
            decimal_value = 11;
        } else if (hexadecimal_value === "C") {
            decimal_value = 12;
        } else if (hexadecimal_value === "D") {
            decimal_value = 13;
        } else if (hexadecimal_value === "E") {
            decimal_value = 14;
        } else if (hexadecimal_value === "F") {
            decimal_value = 15;
        } else {
            decimal_value = Number(hexadecimal_value);
        }
        decimal_num += decimal_value * (16 ** power);
        power += 1;
    }
    return decimal_num;
}

function requiredSystem_converter(decimal_num, base) {
    let converted_num = "";
    while (decimal_num !== 0) {
        remainder = String(decimal_num % base);
        converted_num = remainder + converted_num;
        decimal_num = Math.floor(decimal_num / base);
    }
    return converted_num;
}

function decimal_to_hexadecimal(decimal_num) {
    let hexadecimal_num = "";
    while (decimal_num !== 0) {
        remainder = decimal_num % 16;
        if (remainder === 10) {
            hexadecimal_value = "A";
        } else if (remainder === 11) {
            hexadecimal_value = "B";
        } else if (remainder === 12) {
            hexadecimal_value = "C";
        } else if (remainder === 13) {
            hexadecimal_value = "D";
        } else if (remainder === 14) {
            hexadecimal_value = "E";
        } else if (remainder === 15) {
            hexadecimal_value = "F";
        } else {
            hexadecimal_value = String(remainder);
        }
        hexadecimal_num = hexadecimal_value + hexadecimal_num;
        decimal_num = Math.floor(decimal_num / 16);
    }
    return hexadecimal_num;
}