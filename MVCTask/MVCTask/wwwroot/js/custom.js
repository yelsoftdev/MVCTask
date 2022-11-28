
$(document).ready(function () {
    
    $(".btn-add-sub, #btnCardValidate, #btnCheck, #btnFlowerPreview").prop("disabled", true);
    $(".card-result, #txtUserCountry, .nine-digits-result").hide();
});

// First name and Second name text boxes keyup event //
$(".txt-add-sub").keyup(function () {
    let firstNo = $("#txtFirstNumber").val();
    let secondNo = $("#txtSecondNumber").val();
    if (eIsEmpty(firstNo) || eIsEmpty(secondNo)) {
        $(".btn-add-sub").prop("disabled", true);
    }
    else {
        $(".btn-add-sub").removeAttr("disabled");
    }
    $("#spanResult").text(0);
});

// Add and Subtract buttons click event //
$(".btn-add-sub").click(function () {
    let actionType = $(this).attr('id');
    let firstNo = $("#txtFirstNumber").val();
    let secondNo = $("#txtSecondNumber").val();
    let result = 0;
    if (!isNaN(firstNo) && !isNaN(secondNo) && !eIsEmpty(firstNo) && !eIsEmpty(secondNo)) {
        if (actionType == "btnAddition")
            result = Number(firstNo) + Number(secondNo);
        else if (actionType == "btnSubtraction")
            result = Number(firstNo) - Number(secondNo);
        $("#spanResult").text(result);
    }
});

// Store items click event //
$(".tbl-body-items tr").click(function () {
    
    let imgSrc = $(this).children('td').children('img').attr('src');
    let itemName = $(this).children('#tdItemName').text();
    let priceVal = $(this).children('#item_price').val();
    $('#imgItemPreview').attr('src', imgSrc);
    $('#spanItemName').text(itemName);
    $('#spanItemTotal').text(priceVal);
});

// Card full name and number text boxes keyup event //
$(".txt-card").keyup(function () {
    let fullName = $("#txtCardFullName").val(); 
    let cardNo = $("#txtCardNumber").val();
    if (eIsEmpty(fullName) || eIsEmptyOrZero(cardNo) || cardNo.length < 16) {
        $("#btnCardValidate").prop("disabled", true);
    }
    else {
        $("#btnCardValidate").removeAttr("disabled");
    }
    $("#spanCardResult").text('');
});

// Card Validate button click event //
$("#btnCardValidate").click(function () {
    let fullName = $("#txtCardFullName").val(); 
    let cardNo = $("#txtCardNumber").val();
    let result = 'Not valid';
    if (!isNaN(cardNo) && !eIsEmpty(fullName) && !eIsEmptyOrZero(cardNo)) {
        var cardNoRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if (cardNoRegex.test(cardNo)) {
            result = 'Valid';
        }
    }
    $("#spanCardResult").text(result);
    $(".card-result").show();
});

// Open modal popup to create a user //
$("#btnUserModal").click(function () {    
    $('.txt-user, .ddl-user').val('');
    $("#txtUserCountry").hide();
    $('#userModal').modal('show');
});
$("#ddlUserCountry").change(function () {    
    if (!eIsEmptyOrZero($(this).val()) && $(this).val() == -1) {
        $("#txtUserCountry").val('');
        $("#txtUserCountry").show();
    }
    else {
        $("#txtUserCountry").hide();
    }
});
function ValidateUserRequiredFields() {
    let name = $("#txtUserName").val(), dob = $("#txtUserDOB").val(), nationality = $("#txtUserNationality").val(), ddlCountry = $("#ddlUserCountry").val(),
        txtCountry = $("#txtUserCountry").val(), address = $("#taUserAddress").val(), skills = $("#taUserSkills").val();
    if (eIsEmpty(name) || eIsEmpty(dob) || eIsEmpty(nationality) || eIsEmpty(address) || eIsEmpty(skills)
        || ((eIsEmptyOrZero(ddlCountry) && ddlCountry != -1) || (ddlCountry == -1 && eIsEmpty(txtCountry))))
        return false;
    else
        return true;
}
$("#btnUserCreation").click(function () {        
    let isValidated = ValidateUserRequiredFields();
    if (!isValidated)
    {        
        alert("Please fill out all required fields.");
    }
    else {
        let name = $("#txtUserName").val();
        localStorage.setItem["Username"] = name;
        $('#spanCreatedUserName').text(name);
        alert("User created successfully.");
        $('#userModal').modal('hide');
    }
});

// User should see the number with unique digits in it
$("#txtNineDigitsNo").keyup(function () {    
    if (eIsEmpty($(this).val()) || $(this).val().length < 9) {
        $("#btnCheck").prop("disabled", true);        
    }
    else {
        $("#btnCheck").removeAttr("disabled");
    }
    $('.nine-digits-result').hide();
    $("#spanNineDigitsNoResult").text('');
});
$("#btnCheck").click(function () {    
    let nineDigitsNo = $('#txtNineDigitsNo').val(), output = "";
    if (eIsEmpty(nineDigitsNo) || nineDigitsNo.length < 9) {
        $('.nine-digits-result').hide();
        alert("Please fill valid digits");
    }
    else {
        for (let i = 0; i < nineDigitsNo.length; i++) {
            if (eIsEmpty(output))
                output += nineDigitsNo[i];
            else {
                if (output.indexOf(nineDigitsNo[i]) == -1) {
                    output += nineDigitsNo[i];
                }
            }
        }        
        $('#spanNineDigitsNoResult').text(output);
        $('.nine-digits-result').show();
    }
});

// Flowers click event //
$(".div-flower-items input[type=radio]").click(function () {
    $("#btnFlowerPreview").removeAttr('disabled');
    $('#imgFlowerPreview').attr('src', '');
    $('#spanFlowerName').text('');
});
$("#btnFlowerPreview").click(function () {
    let selectedId = $(".div-flower-items input[type=radio]:checked").attr('id');
    let imgSrc = $("#hdn_" + selectedId).val();
    let flowerName = $("#lbl_" + selectedId).text();
    $('#imgFlowerPreview').attr('src', imgSrc);
    $('#spanFlowerName').text(flowerName);
});
