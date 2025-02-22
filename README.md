# Fetch Language
** url: https://tekeya.io/v8/general_api/language_list
** method: POST
-- body:{ "language_slug" : "en"}

>> response: 
{
    "language_list": [
        {
            "id": "2",
            "language_slug": "ar",
            "language_name": "Arabic",
            "language_code": "ar_EG",
            "sort_option": "1"
        },
        {
            "id": "1",
            "language_slug": "en",
            "language_name": "English",
            "language_code": "en_US",
            "sort_option": "2"
        }
    ],
    "language_file": "https://tekeya.io/uploads/language_import/5ee4fdbd9fcff735bcdcb71ee2f84f73.xlsx", <<<<<
    "use_mile": "0",
    "default_language_slug": "ar",
    "default_language_name": "Arabic",
    "status": 1,
    "message": "تم العثور على السجلات"
}