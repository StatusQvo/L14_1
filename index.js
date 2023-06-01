class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.technologies = []
    this.status = 'Junior'
  }

  setTechnologies(technologies) {
    this.technologies = [...this.technologies, ...technologies]
  }

  setNewStatus(newStatus) {
    this.status = newStatus
  }
}

const student = new Student('Maxim', 20)
student.setTechnologies(['HTML', 'CSS', 'JavaScript'])
student.setNewStatus('Middle')
console.log(student)

// для отображения в браузере
let resultText = ''

for (const property in student) {
  resultText += property + ': ' + student[property] + '<br>'
}

document.querySelector('#Answer').innerHTML = resultText
