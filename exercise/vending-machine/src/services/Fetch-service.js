/** Singleton Service for connecting with data. */

export default new (class FetchService {
  // Url of the API endpoint
  url = "https://www.mocky.io/v2/5c77c5b330000051009d64c9";

  /**
   * Get the list of products
   * @return {Promise<{total: number, data: Product[]}>} The Promise for array of products
   */
  getProductList() {
    return fetch(this.url).then(res => res.json());
  }
})();
