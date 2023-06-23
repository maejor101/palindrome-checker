


function palindrome()
		{
		var getInput= document.getElementById("pali1").value;
		var storeInput = "";
		for (i = getInput.length-1; i >= 0; i--) {
            storeInput = storeInput + getInput[i]
        }
		if (getInput == storeInput)
		document.getElementById("pali2"). value = storeInput + " is a Palindrome String ";
		else
		document.getElementById("pali2"). value = storeInput + " is not a Palindrome String";
		}