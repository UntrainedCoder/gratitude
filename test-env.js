// Test script to check environment variables
console.log('=== ENVIRONMENT TEST ===');
console.log('HF_API_TOKEN:', process.env.HF_API_TOKEN ? 'Present' : 'Missing');
console.log('Token length:', process.env.HF_API_TOKEN?.length || 0);
console.log('All env vars with HF:', Object.keys(process.env).filter(key => key.includes('HF')));
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('========================'); 