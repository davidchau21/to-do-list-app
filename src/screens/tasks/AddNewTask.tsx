import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TextComponent from '../../components/TextComponent'

const AddNewTask = () => {
  return (
    <Container back title="Add new task">
        <TextComponent text="Add New Task" />
    </Container>
  )
}

export default AddNewTask

const styles = StyleSheet.create({})