"use client"
import { scrapeAndStoreProduct } from '@/lib/actions'
import { title } from 'process'
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) =>{
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    // check if sit

    if (hostname.includes('amazon.com') ||
        hostname.includes('amazon.') ||
        hostname.includes('amazon')){
          return true
        }
    
  } catch (error) {
    return false
    
  }
  return false

}

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState('')
  const [isLoading, setIsLoading]  = useState(false)
  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    

    const isValidLink = isValidAmazonProductURL(searchPrompt)

    if(!isValidLink)return alert('Please provide a valid Amazon Link')

    try {
      setIsLoading(true)


      // scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt)

      



    } catch (error) {
      console.log(error)
      
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <form  className="flex flex-wrap gap-4 mt-12"
    onSubmit = {handleSubmit}>
      <input type="text"
      value={searchPrompt}
      onChange={(e) => setSearchPrompt(e.target.value)}
      className='searchbar-input'
      placeholder='Enter produck link' />

      <button className="searchbar-btn"
      type='submit'
      disabled = {searchPrompt === ""}>
          {isLoading ? 'Searching....' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar
