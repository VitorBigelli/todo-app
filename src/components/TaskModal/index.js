import React, { useState } from 'react'
import Toggle from '../Toggle'
import TaskInput from '../TaskInput'
import { Modal, Button } from 'react-bootstrap'

const TaskModal = ({ task, show, onClose}) => {
    
    return ( 
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Editar Tarefa</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Toggle />
                <TaskInput defaultTask={task} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TaskModal