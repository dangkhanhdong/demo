function loginValue()
		{
			var password = document.getElementById("password").value;
                var y = document.getElementById("clear");
				var z = document.getElementById("all");			
			if(password=="12345678901234567890")
			{
				alert('Oke, mật khẩu bạn nhập đã chính xác!!!');
						y.remove(y);
						z.style.display = 'block';
				 return false;
        	}
			else{
				alert("Mật khẩu bạn nhập đã sai");
				return false;
			}
	}
			
