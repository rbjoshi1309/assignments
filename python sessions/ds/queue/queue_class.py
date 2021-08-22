# -*- coding: utf-8 -*-
"""queue_class.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1SIbHfmRoNpMAi8_2nNqFZwksRxkUmyZE
"""

class Queue:
  def __init__(self):
    self.q = []

  def is_empty(self):
    return len(self.q) == 0

  def enqueue(self, data):
    self.q.append(data)

  def dequeue(self):
    if len(self.q) == 0:
      return "Queue is Empty"
    else:
      return self.q.pop(0)

  def rear(self):
    if len(self.q) == 0:
      return "Queue is Empty"
    else:
      return self.q[-1]

  def front(self):
    if len(self.q) == 0:
      return "Queue is Empty"
    else:
      return self.q[0]

  def size(self):
    return len(self.q)

  def print_queue(self):
    # print(self.q)
    for element in self.q:
      print(element)

queue = Queue()
print(type(queue))

print(queue.is_empty())

print(queue.size())

queue.print_queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

print(queue.is_empty())

print(queue.size())

queue.print_queue()

print('Front element of queue : {}'.format(queue.front()))
print('Rear element of queue : {}'.format(queue.rear()))

popped_element = queue.dequeue()
print(popped_element)

print(queue.size())

queue.print_queue()

queue.enqueue(6)

print(queue.size())

queue.print_queue()

print('Front element of queue : {}'.format(queue.front()))
print('Rear element of queue : {}'.format(queue.rear()))

popped_element = queue.dequeue()
popped_element = queue.dequeue()
popped_element = queue.dequeue()
popped_element = queue.dequeue()
popped_element = queue.dequeue()
print(popped_element)

print(queue.is_empty())

print(queue.size())

popped_element = queue.dequeue()
print(popped_element)

print('Front element of queue : {}'.format(queue.front()))
print('Rear element of queue : {}'.format(queue.rear()))
