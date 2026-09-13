#include <iostream>
#include <string>
#include <curl/curl.h>


// Callback function to handle incoming data stream
size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* userp)
{
	size_t totalSize = size * nmemb;
	userp->append((char*)contents, totalSize);
	return totalSize;
}

int main() {

	CURL* curl;
	CURLcode res;
	std::string readBuffer;

	curl_global_init(CURL_GLOBAL_DEFAULT);
	curl = curl_easy_init();

	if (curl) {
		curl_easy_setopt(curl, CURLOPT_URL, "https://github.com");

		// Custom headers (like User-Agent)
		struct curl_slist* headers = NULL; 
		headers = curl_slist_append(headers, "User-Agent: C++ App");
		curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

		// Send all data returned by the server to the callback function
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);

		// Perform the request
		res = curl_easy_perform(curl);

		if (res == CURLE_OK) {
			std::cout << "Response: " << readBuffer << std::endl;
		}
		else {
			std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
		}

		// Cleanup
		curl_slist_free_all(headers);
		curl_easy_cleanup(curl);
	}
	curl_global_cleanup();


	return 0;
}
