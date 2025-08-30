export interface ResponseData {
  query: string;
  theory: string;
  math: string;
  insights: string;
  sources: Array<{ title: string; url: string; description: string; }>;
  timestamp: string;
}

const mockResponses: Record<string, ResponseData> = {
  'gradient descent': {
    query: 'What is gradient descent?',
    theory: 'Gradient descent is an optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent. Think of it like rolling a ball down a hill - the ball naturally follows the path that leads downward most quickly. In machine learning, we use this concept to find the best parameters for our models by minimizing the error or loss function.',
    math: 'Mathematically, gradient descent updates parameters using the formula: θ = θ - α∇J(θ), where θ represents the parameters, α is the learning rate, and ∇J(θ) is the gradient of the cost function. The gradient points in the direction of steepest increase, so we subtract it to move toward the minimum.',
    insights: 'The key insight is that gradient descent is like having a smart compass that always points toward better solutions. The learning rate α controls how big steps we take - too big and we might overshoot the target, too small and we move very slowly. This balance is crucial for effective learning in neural networks.',
    sources: [
      {
        title: 'Stanford CS229 Lecture Notes',
        url: 'https://cs229.stanford.edu/',
        description: 'Comprehensive mathematical treatment of optimization in machine learning'
      },
      {
        title: 'Deep Learning Book - Chapter 4',
        url: 'https://www.deeplearningbook.org/',
        description: 'Detailed explanation of numerical optimization techniques'
      },
      {
        title: 'Andrew Ng\'s Course',
        url: 'https://www.coursera.org/learn/machine-learning',
        description: 'Intuitive explanation with visual examples'
      },
      {
        title: 'Distill.pub Visual Guide',
        url: 'https://distill.pub/',
        description: 'Interactive visualizations of optimization landscapes'
      }
    ],
    timestamp: new Date().toLocaleTimeString()
  },
  'neural network': {
    query: 'What is a neural network?',
    theory: 'A neural network is a computational model inspired by how biological neurons work in the brain. It consists of interconnected nodes (neurons) organized in layers that process information. Each connection has a weight that determines how much influence one neuron has on another. Neural networks can learn complex patterns by adjusting these weights through training.',
    math: 'Each neuron computes a weighted sum of its inputs: z = Σ(wi * xi) + b, then applies an activation function: a = f(z). Common activation functions include sigmoid, tanh, and ReLU. The network\'s output is computed through forward propagation, and learning occurs through backpropagation using the chain rule of calculus.',
    insights: 'Think of neural networks as universal function approximators - they can learn to map any input to any output given enough data and the right architecture. The magic happens in the hidden layers, where the network learns to extract increasingly complex features from raw data, similar to how our visual cortex processes images.',
    sources: [
      {
        title: 'Neural Networks and Deep Learning',
        url: 'http://neuralnetworksanddeeplearning.com/',
        description: 'Free online book with excellent intuitive explanations'
      },
      {
        title: '3Blue1Brown Neural Network Series',
        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',
        description: 'Beautiful visual explanations of how neural networks work'
      },
      {
        title: 'MIT Introduction to Deep Learning',
        url: 'http://introtodeeplearning.com/',
        description: 'Comprehensive course materials and lectures'
      },
      {
        title: 'TensorFlow Neural Network Guide',
        url: 'https://www.tensorflow.org/guide/keras/sequential_model',
        description: 'Practical implementation examples and tutorials'
      }
    ],
    timestamp: new Date().toLocaleTimeString()
  },
  'backpropagation': {
    query: 'Explain backpropagation',
    theory: 'Backpropagation is the learning algorithm that teaches neural networks by working backwards through the network. When the network makes a prediction, we compare it to the correct answer and calculate the error. Then we trace this error backwards through each layer, figuring out how much each weight contributed to the mistake, and adjust the weights accordingly.',
    math: 'Backpropagation uses the chain rule of calculus to compute gradients: ∂L/∂w = ∂L/∂a * ∂a/∂z * ∂z/∂w, where L is the loss, a is the activation, z is the weighted input, and w is the weight. This allows us to efficiently compute how changing each weight affects the overall error.',
    insights: 'The beautiful insight of backpropagation is that it solves the credit assignment problem - how do we know which weights to blame for a wrong answer? By flowing the error signal backwards, each weight gets exactly the right amount of blame, enabling the network to learn from its mistakes systematically.',
    sources: [
      {
        title: 'Backpropagation Calculus',
        url: 'https://www.youtube.com/watch?v=tIeHLnjs5U8',
        description: '3Blue1Brown\'s visual explanation of the mathematics'
      },
      {
        title: 'CS231n Lecture Notes',
        url: 'https://cs231n.github.io/optimization-2/',
        description: 'Stanford\'s detailed mathematical derivation'
      },
      {
        title: 'Deep Learning Book Chapter 6',
        url: 'https://www.deeplearningbook.org/',
        description: 'Comprehensive theoretical treatment'
      },
      {
        title: 'Backpropagation Step by Step',
        url: 'https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/',
        description: 'Detailed walkthrough with numerical examples'
      }
    ],
    timestamp: new Date().toLocaleTimeString()
  }
};

export function getMockResponse(query: string): ResponseData {
  const normalizedQuery = query.toLowerCase();
  
  // Try to find a matching response
  for (const [key, response] of Object.entries(mockResponses)) {
    if (normalizedQuery.includes(key)) {
      return {
        ...response,
        query: query,
        timestamp: new Date().toLocaleTimeString()
      };
    }
  }

  // Default response for unmatched queries
  return {
    query: query,
    theory: `Great question about "${query}"! This is a fascinating topic in AI/ML. While I'd love to give you a comprehensive answer, this demo shows how Rav would structure responses with clear theory sections. In a real implementation, Rav would provide detailed explanations tailored to your specific question using advanced language models.`,
    math: 'The mathematical foundations would be explained here with relevant equations, formulas, and computational approaches. Rav breaks down complex mathematical concepts into digestible pieces, showing step-by-step derivations when helpful.',
    insights: `The key insight about "${query}" is that every AI/ML concept builds upon fundamental principles. Rav helps you connect the dots between theory and practice, showing not just what something is, but why it matters and how it fits into the bigger picture of artificial intelligence.`,
    sources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.coursera.org/specializations/deep-learning',
        description: 'Comprehensive course series covering fundamental concepts'
      },
      {
        title: 'Machine Learning Yearning',
        url: 'https://www.mlyearning.org/',
        description: 'Practical guide to machine learning projects'
      },
      {
        title: 'Papers With Code',
        url: 'https://paperswithcode.com/',
        description: 'Latest research papers with implementation code'
      },
      {
        title: 'Towards Data Science',
        url: 'https://towardsdatascience.com/',
        description: 'High-quality articles on AI/ML topics'
      }
    ],
    timestamp: new Date().toLocaleTimeString()
  };
}