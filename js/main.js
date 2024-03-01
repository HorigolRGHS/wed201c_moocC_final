function hiddenInfo() {
    var info = document.getElementsByTagName("figcaption")[0];
    var infoImage = document.getElementById("myImage");
    var des = document.getElementById("des");
    if (info.innerHTML == "Software Developer") {
        infoImage.src = "./imgs/myProfile2.png";
        infoImage.style.borderColor = "pink";
        info.innerHTML = "The Pure-Hearted Princess";
        des.innerHTML = "eyJpdiI6IkdQYWVMaHVaZWxZR09hUTZSSVMrQlE9PSIsCiJ2IjoxLAoiaXRlciI6MTAwMCwKImtzIjoyNTYsCiJ0cyI6NjQsCiJtb2RlIjoiY2NtIiwKImFkYXRhIjoiIiwKImNpcGhlciI6ImFlcyIsCiJzYWx0IjoiaG5zRnRuNUtXWk09IiwKImN0IjoiMjdiNjRlMFdaazBxVEYrYWtUWjAzNDF1LzBEaEkwdGdIZzZrbGZqbytFR0Z4a2hRcWZmUnBNaGNIRFNpUTdJV29KbXUxNlU0cmV3dU0ram9NdFl6QWpKeFNzRE1MdHBVQTVlYzFYdE1aeXFWZzFWYlJnK3k0R2t0RmtqdHdRQll4bDdQeWQxbEFRTWp2RitnZC9tRzRMOTVPQXB3QURpNG8yajFVV2tXaGIvRURiOEJXaGN1SVF0R0dDallZRkdkL0ZSdlFqRGJ0ZXhPQTZaNHZ0TEhYSXZKMGd1R3hXU0dXWXlYTW4yMXpzVU1XcXhlcllGcWFiMm9aaDg3SU9LMDJRQXo5aFNVTVAxc0FnSkU2UXlrTzBlaVlicnY2SDlkS1VjWlB2L2VPWkxYWlVpTk93a1RQRVBPRkYrU1pQcW9reVpLNmJ2eU9NUExWRUlaQ0Z2VkRSbExiaS9VNGVvQS8xQ0lra0RyIn0="
    } else {
        info.innerHTML = "Software Developer";
        infoImage.src = "./imgs/myProfile1.jpg";
        infoImage.style.borderColor = "rgb(72, 72, 72)";
        des.innerHTML = "A boy who feels bored and wants to discover new things about IT temporarily when I'm still in this cruel and boring world. I'm studying at F University and this is my final project, thanks for reading this meaningless line."
    }
}