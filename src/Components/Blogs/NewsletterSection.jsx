import React, { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResult('Subscribing...')

    const formData = new FormData()
    formData.append('access_key', '5b2e5f7d-531f-46cb-8f70-804e36c770b5')
    formData.append('email', email)
    formData.append('subject', 'New Newsletter Subscription')
    formData.append('from_name', 'Drift Academy Newsletter')
    formData.append('message', `New subscriber email: ${email}`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult('Successfully subscribed! ✔️')
        setEmail('')
        setTimeout(() => setResult(''), 3000)
      } else {
        setResult(`Error: ${data.message || 'Something went wrong'}`)
      }
    } catch (error) {
      setResult('Error: Could not subscribe. Please try again.')
      console.error(error)
    }
  }

  return (
    <section className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get the Best <span className="text-[#f6821c]">Tips First</span>
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Subscribe to our newsletter for the latest articles, study tips, and exam preparation strategies delivered to your inbox.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-5 py-3 rounded-lg bg-[#0a0a0a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-[#f6821c] flex-grow sm:max-w-xs"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#f6821c] hover:bg-yellow-500 text-white font-bold rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Response Message */}
        {result && (
          <p
            className={`mt-4 font-medium transition-opacity ${
              result.includes('Successfully') ? 'text-green-400' : 'text-yellow-400'
            }`}
          >
            {result}
          </p>
        )}
      </div>
    </section>
  )
}

export default NewsletterSection
