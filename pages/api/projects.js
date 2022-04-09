import projects from './projects.json'

export default function handler(req, res) {
  res.status(200).json(projects)
}
